export default {
    path: '/user/signIn',
    methods: ['POST'],
    title: 'Sign In',
    description: 'Sign In',
    payload: {
        email: 'admin@test.com',
        password: 'admin123'
    },
    response: {
        status: 200,
        message: 'Success',
        userDetails:{
            name: 'name Emp',
            empCode: 'empCode Emp',
            project: 'project Emp',
            techStack: 'techStack Emp'
        }
    }
}