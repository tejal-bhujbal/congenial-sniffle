export default {
    path: '/user',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    title: 'User',
    description: 'Add, Edit, Delete, Read User Details',
    response: (req, res) => {
        if (req.method === 'GET') {
            return res.status(200).json({
                status: 200,
                message: 'Success',
                users: [
                    {
                        name: 'name Emp',
                        empCode: 'empCode Emp',
                        project: 'project Emp',
                        techStack: 'techStack Emp'
                    },
                    {
                        name: 'name Emp2',
                        empCode: 'empCode Emp2',
                        project: 'project Emp2',
                        techStack: 'techStack Emp2'
                    }
                ]
            })
        }

        if (req.method === 'POST') {
            return res.status(200).json({
                message: 'User added successfully'
            })
        }

        if (req.method === 'PUT') {
            return res.status(200).json({
                message: 'User updated successfully'
            })
        }

        if (req.method === 'DELETE') {
            return res.status(200).json({
                message: 'User deleted successfully'
            })
        }
    }
}