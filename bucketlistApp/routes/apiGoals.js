const goalsStore = require('../storage/goalsStore');

module.exports = (req, res) => {
    // Nový způsob parsování URL bez varování
    const baseURL = `http://${req.headers.host}`;
    const myUrl = new URL(req.url, baseURL);
    const pathname = myUrl.pathname;
    const method = req.method;

    //GET--------------------------------------------------
    if (pathname === '/api/goals' && method === 'GET') {
        let goals = goalsStore.readAll();
        const search = myUrl.searchParams.get('search');
        const category = myUrl.searchParams.get('category');
        const status = myUrl.searchParams.get('status');

        if (search) goals = goals.filter(g => g.name.toLowerCase().includes(search.toLowerCase()));
        if (category) goals = goals.filter(g => g.category === category);
        if (status) goals = goals.filter(g => g.status === status);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(goals));
    }

    if (pathname === '/api/goal' && method === 'GET') {
        const id = myUrl.searchParams.get('id');
        const goals = goalsStore.readAll();
        const goal = goals.find(g => g.id === id);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(goal || {}));
    }

    //POST--------------------------------------------------
    if (pathname === '/api/goals' && method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const goals = goalsStore.readAll();
            const newGoal = JSON.parse(body);
            newGoal.id = Date.now().toString();
            newGoal.createdAt = new Date().toLocaleDateString('en-US');
            goals.push(newGoal);
            goalsStore.saveAll(goals);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newGoal));
        });
        return true;
    }

    //PUT--------------------------------------------------
    if (pathname === '/api/goals' && method === 'PUT') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const updatedGoal = JSON.parse(body);
            let goals = goalsStore.readAll();
            goals = goals.map(g => g.id === updatedGoal.id ? { ...g, ...updatedGoal } : g);
            goalsStore.saveAll(goals);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(updatedGoal));
        });
        return true;
    }

    //DELETE--------------------------------------------------
    if (pathname === '/api/goals' && method === 'DELETE') {
        const id = myUrl.searchParams.get('id');
        let goals = goalsStore.readAll();
        goals = goals.filter(g => g.id !== id);
        goalsStore.saveAll(goals);
        res.writeHead(200);
        return res.end();
    }

    return false;
};