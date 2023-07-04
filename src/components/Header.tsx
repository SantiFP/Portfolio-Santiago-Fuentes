import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState, AppDispatch } from "../store/redux-logic";
// import { counterActions } from "../store/redux-logic";
// import { authActions } from "../store/redux-logic";

const Header: React.FC = () => {
  // const counter = useSelector((state: RootState) => state.counter);
  // const auth = useSelector((state: RootState) => state.auth.isAuth);

  // const { count, show } = counter;

  // const dispatch = useDispatch<AppDispatch>();

  // const increment = () => {
  //   dispatch(counterActions.increment());
  // };

  // const toggle = () => {
  //   dispatch(counterActions.toggleCounter());
  // };

  // const increase = () => {
  //   dispatch(counterActions.increase(5));
  // };

  // const log = () => {
  //   dispatch(authActions.logStatus());
  // };
  return (
    <>
      <p className="text-3xl text-center text-white py-8 bg-blue-500">
        Weather App
      </p>
      {/* <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <button
            onClick={increment}
            className="bg-green-600 px-2 py-1 mt-4 ml-5"
          >
            Count
          </button>
          <button onClick={toggle} className="bg-green-600 px-2 py-1 mt-4 ml-5">
            Toggle
          </button>
          <button
            onClick={increase}
            className="bg-green-600 px-2 py-1 mt-4 ml-5"
          >
            Increase
          </button>
          {show && (
            <span className="bg-green-500 px-2 py-1 mt-4 ml-5">{count}</span>
          )}
        </div>

        <button onClick={log} className="bg-green-600 px-2 py-1 mt-4 ml-5 mr-2">
          {auth ? "Logout" : "Login"}
        </button>
      </div> */}
    </>
  );
};

export default React.memo(Header);

/////////////////////////////// LO MISMO PERO HECHO CON UN COMPONENTE DE CLASE //////////////////////////////////////////

// type HeaderProps = ConnectedProps<typeof connector>;

// class Header extends Component<HeaderProps> {
//   incrementHandler = () => {
//     console.log(this.props.count);
//     console.log(this.props.namer);
//     this.props.increment();
//   };
//   decrementHandler = () => {
//     this.props.decrement();
//   };

//   toggleCounterHandler = () => {
//     // Implementa la lógica para alternar el contador
//   };

//   render() {
//     return (
//       <>
//         <p className="text-3xl text-center text-white py-8 bg-blue-500">
//           Weather App
//         </p>
//         <button
//           onClick={this.incrementHandler.bind(this)}
//           className="bg-green-600 px-2 py-1 mt-4 ml-5"
//         >
//           Count
//         </button>
//         <span className="bg-green-500 px-2 py-1 mt-4 ml-5">{this.props.count}</span>
//       </>
//     );
//   }
// }

// // Mapea el estado de Redux a las props del componente
// const mapStateToProps = (state: RootState) => {
//   return {
//     count: state.count,
//     namer: state.name
//   };
// };

// // Define los despachadores de acciones y mapea las acciones a las props del componente
// const mapDispatchToProps = {
//   increment: () => ({ type: "increment" }),
//   decrement: () => ({ type: "decrement" }),
// };

// // Crea el conector que combina mapStateToProps y mapDispatchToProps
// const connector = connect(mapStateToProps, mapDispatchToProps);

// // Conecta el componente Counter con Redux utilizando el conector
// export default connector(Header);
