import {createStore} from 'vuex'
import axios from 'axios'
import router from '../router';
const store = createStore({
    namespaced : true,
    state:{
        idToken: '',
        returnSecureToken: ''

    },
    getters:{
        checkGet(state){
            return state.idToken !== '';
        }
    },
    mutations:{
        idTokenUptade(state,payload){
            state.idToken = payload

        },
        checkToken(state){
            let token = localStorage.getItem('token');
            if(token){
                state.idToken = token;
            }
        },
        logutUser(state){
            localStorage.removeItem('token');
            state.idToken = '';
            router.replace('/login')
            
        }
    },
    actions:{
        async registerUser({commit},payload){
            let {data} = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBN7QhdVT_ezr67Q7puGpwU25nQZo1kvNY', {
               email : payload.mail, password : payload.password, returnSecureToken : true
            });
             
             commit('idTokenUptade',data.idToken);
             localStorage.setItem('token',data.idToken);
             router.replace('/')

           },
    }
})
export default store