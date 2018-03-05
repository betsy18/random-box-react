import React, { Component } from 'react';
import './App.css';

class Color extends React.Component {
  render() {
    let background = {
      backgroundColor: this.props.colorRandom
    };
    return (
    //  se utiliza el evento onload para la actualizacion de los colores
    <div className="box" onLoad={this.props} style={background}>
    </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // número de colores asigandos a los circulos
      number: 1,
      // contenedor de los nros para los colores
      arrayColors: []
    
    };
    // recorrido para cada item
    for (let i = 0; i < this.state.number; i += 1) {
      // asignado el nro de color
      this.state.arrayColors.push({ colorRandom: this.generateColor() });
    }
  }
  generateColor() {
    // formular para colores hexagecimales
    return '#' + Math.random().toString(16).substr(-6);
  }

  render() {
    return (
      <div className="container">
      <h1 className="App-title">Welcome to Random Box</h1>
        {this.state.arrayColors.map((color) => (
          // Llamando a la clase poder llamar a los estilos del div
          <Color colorRandom={color.colorRandom}/>
        ))}
      </div>
    );
  }
}

export default App;
