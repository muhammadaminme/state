// import React, {Component} from 'react'

// export default class Roots extends Component{
//     constructor(props){
//         super(props);
//             this.state={
//                 age:1
//             }
//     }
//     render(){
//         let age = 10;
//         const ageUp = () => {
//             age++
//             console.log(age)

//         }

//         return (
//             <div className='main-root'>
//                 <h1>State</h1>
//                 <h2>My Age {this.state.age}</h2>
//                 <button onClick={ageUp}>Click to add age</button>
//             </div>
//         )
//     }
// }

/* ================================================================================= */

// import React, {Component} from 'react'

// export default class Roots extends Component{
//     constructor(props){
//         super(props);
//             this.state={
//                 age:1,
                
//             }
//     }
//     render(){
        
//         const ageUp = () => {
//             this.setState({age: this.state.age +1})
//         };
//         const DownUp = () => {
//             this.setState({age: this.state.age -1})
//         };

//         return (
//             <div className='main-root'>
//                 <h1>State</h1>
//                 <h2 >My Age {this.state.age}</h2>
//                 <button onClick={ageUp}>Click to add age</button>
//                 <button onClick={DownUp}>Click to Decrease age</button>
//             </div>
//         )
//     }
// }

/* ====================================== QUESTIONS============================= */

// import React, {Component} from 'react'

// export default class Roots extends Component{
//     constructor(props){
//         super(props);
//             this.state={
//                 age:1,  
//                 old:60
                
                
//             }
//     }
//     render(){
        
//         const ageUp = () => {
//             this.setState({age: this.state.age +1})
//         };
//         const ageDown = () => {
//             this.setState({old: this.state.age -1})
//         };

//         return (
//             <div className='main-root'>
//                 <h1>State</h1>
//                 <h2 >My Age {this.state.age}</h2>
//                 <h2 >My Age {this.state.old}</h2>
                
//                 <button onClick={ageUp} >Up</button>
//                 <button onClick={ageDown}>Down </button>
               
//             </div>
//         )
//     }
// }

/* ================================================================ */

/* If */

// import React, {Component} from 'react'

// export default class Roots extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             age: 1
//         };
        

//     }

    

//     plus(){
//         if(this.state.age <=6){
//             this.setState({age : this.state.age +1 })
//         }
//     }

//     render(){
//         const addUp = () =>{
//         if(this.state.age <6){
//             this.setState({age: this.state.age +1})
//             }
//         }

//         const Down = () =>{
//         if(this.state.age >3){
//             this.setState({age: this.state.age -1})
//             }
//         }
//         return (
//             <div className='easy-root'>
//             <h1>State</h1>
//             <h2>A child's Age: {this.state.age} </h2>
//             <button onClick={addUp}>CLICK to add</button>
//             <button onClick={Down}>CLICK to add</button>
//             <button onClick={this.plus.bind(this)}>CLICK to Plus</button>
//             </div>  
//       )
//     }   
// }



/* ============================ Text Input ==================================== */

// import React, {Component} from 'react'

// export default class Roots extends Component{
//     constructor(props){
//         super()
//         this.state = {
//             age:1,
//             text: ''
//         }
        
//     }
    
//     render(){
//         const ageUp = () => {
//             if(this.state.age <= 6)
//             this.setState({age: this.state.age +1})
//         }

//         const ageDown = (e) => {
//             console.log(e.target.value)
//             if(this.state.age >3)
//             this.setState({age: this.state.age -1})
//         }

        

        
//             const Change = (e) => {
//                 this.setState({text: e.target.value})
//             }
        
//         return (
//             <div>
//                 <h1>My age:{this.state.age}</h1>
//                 <button onClick={ageUp}>Age Up</button>
//                 <button onClick={ageDown}>Age Down</button>

//                 <h2>Logo: {this.state.text}</h2>
//                 <input onChange={Change}/>
                
//             </div>
//         )
//     }
   

    
// }


/* ========================== Target parget=================================================== */

import React, {Component} from 'react'

export default class Roots extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'web'
        }

    }

    

    render(){

        const Change = (e, title) => {
            console.log(title)
            this.setState({name: e.target.value})
        }
        return(
            <div>
                <h1>Logo: {this.state.name}</h1>
                <input onChange={(e)=>Change(e, "yeh")}/>
                <input onChange={(e) =>Change(e,"hey")}/>
            </div>
            
        )
    }
}