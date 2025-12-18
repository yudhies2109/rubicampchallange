function objectAnalyzer(data) {
    let maxDepth = 0;
    let arrayCount = 0;
    let objectCount = 0;
    const keysSet = new Set();
    let primitiveCount = 0;
    let totalLikes = 0;
    const enabledFeatures = [];
    const disabledFeatures = [];

    let totalPosts = data.users.reduce((total, user) => total + user.posts.length, 0);

    for (let i = 0; i < data.users.length; i++) {
        const user = data.users[i];

        for (let j = 0; j < user.posts.length; j++) {
            totalLikes += user.posts[j].likes;
        }
    }


    for (const key in data.settings.notifications) {
        if (data.settings.notifications[key] === true) {
            enabledFeatures.push(key);
        } else {
            disabledFeatures.push(key);
        }
    }


    function structure(data, currentDepth) {

        if (currentDepth > maxDepth) {
            maxDepth = currentDepth;
        }

        if (typeof data !== "object" || data == null) {
            primitiveCount++;
        } else {
            if (Array.isArray(data)) {
                arrayCount++;
                if (data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        structure(data[i], currentDepth);
                    }
                }
            } else {
                // const keys = Object.keys(data);
                objectCount++;

                for (const key in data) {
                    keysSet.add(key);
                    structure(data[key], currentDepth + 1);
                }
            }

        }

    }

    structure(data, 1);

    return {

        structure: {
            depth: maxDepth,
            totalKeys: keysSet.size,
            arrayCount,
            objectCount,
            primitiveCount
        },
        analysis: {
            users: {
                count: data.users.length,
                totalPosts,
                totalLikes,
                averageLikes: totalLikes / totalPosts
            },
            settings: {
                enabledFeatures,
                disabledFeatures
            }
        },
        flattened: {
            "users.0.id": data.users[0].id,
            "users.0.name": data.users[0].name,
            "users.0.posts.0.title": data.users[0].posts[0].title,
            "users.0.posts.0.likes": data.users[0].posts[0].likes,
            "settings.theme": data.settings.theme,
            "settings.notifications.email": data.settings.notifications.email,
            "metadata.version": data.metadata.version
        }
    }
}

// Tulis function objectAnalyzer di sini

let complexData = {
    users: [
        { id: 1, name: "Alice", posts: [{ title: "Hello", likes: 10 }] },
        { id: 2, name: "Bob", posts: [{ title: "World", likes: 5 }, { title: "Test", likes: 15 }] }
    ],
    settings: {
        theme: "dark",
        notifications: { email: true, push: false }
    },
    metadata: {
        version: "1.0",
        lastUpdated: "2023-01-01"
    }
};

console.log(JSON.stringify(objectAnalyzer(complexData), null, 3));
// console.log(objectAnalyzer(complexData));