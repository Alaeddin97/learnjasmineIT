import { routes } from "./app.routes"
import { UsersComponent } from "./users/users.component"

describe('routes', () =>{
    it('should contain route /users', () => {
        expect(routes).toContain({path: 'users', component:UsersComponent});
    })
})