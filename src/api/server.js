const token = 'e65f5adf6cdfc7935effda7ade535ba46010b57f';

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://capstone-854z.onrender.com/api/rsvps`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create:async (data) => {
        const response = await fetch(`https://capstone-854z.onrender.com/api/rsvps`,
        {
            method: 'POST' ,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            console.log("Failed to create new data server");   
        }

        return await response.json()
    },

    update:async (id, data) => {
        const response = await fetch(`https://capstone-854z.onrender.com/api/rsvps/${id}`,
        {
            method: 'PUT' ,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        
        if (!response.ok) {
            throw new Error("Failed to update new data to server");   
        }

        return await response.json()
    },

    delete:async (id) => {
        const response = await fetch(`https://capstone-854z.onrender.com/api/rsvps/${id}`,
        {
            method: 'DELETE' ,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
        })
        
        if (!response.ok) {
            throw new Error("Failed to delete data from server");   
        }

        return;
    },
    
}