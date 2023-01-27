import {connect} from 'react-redux'
function App(props) {
    return (
        <div>
            <h1>{props.count}0</h1>
            <button onClick={props.plus}>increment</button>
         
        </div>
    );
}
function mapStateToProps(state){
return state
}
function mapDispatchToProps(dispatch){
return {
    plus: ()=>{
       
        console.log("plus ishladi");
    }
}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);