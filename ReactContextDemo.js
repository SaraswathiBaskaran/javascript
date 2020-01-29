import React from 'react';

const refContext = React.createContext();

class PlaceHolder extends React.Component{

state={

empName:"Magesh",

empLoc:"Chennai"

}

render(){

return(

<React.Fragment>

<refContext.Provider value={

{

newState:this.state,

newLocation:() => this.setState({empLoc:"CDC5"})

}

}>

{this.props.children}

</refContext.Provider>

</React.Fragment>

);

}

}

class Parent extends React.Component{

render(){

return(

<React.Fragment>

<refContext.Consumer>

{

(objReferene) => (

<React.Fragment>

<p> Name : {objReferene.newState.empName}</p>

<p> Location : {objReferene.newState.empLoc}</p>

</React.Fragment>

)

}

</refContext.Consumer>

<Child></Child>

</React.Fragment>

);

}

}

class Child extends React.Component{

render(){

return(

<React.Fragment>

<refContext.Consumer>

{

(objRef) => (

<React.Fragment>

<p> Name : {objRef.newState.empName}</p>

</React.Fragment>

)

}

</refContext.Consumer>

<GrandChild></GrandChild>

</React.Fragment>

);

}

}

class GrandChild extends React.Component{

render(){

return(

<React.Fragment>

<refContext.Consumer>

{

(objRefer)=>(

<React.Fragment>

<p> Name : {objRefer.newState.empName}</p>

<p> Location : {objRefer.newState.empLoc}</p>

<button onClick={()=>objRefer.newLocation()}>Change Location</button>

</React.Fragment>

)

}

</refContext.Consumer>

</React.Fragment>

);

}

}

export class ReactContextDemo extends React.Component{

render(){

return(

<React.Fragment>

<PlaceHolder myValue="ReactJS">

<Parent></Parent>

</PlaceHolder>

</React.Fragment>

);

}

}
