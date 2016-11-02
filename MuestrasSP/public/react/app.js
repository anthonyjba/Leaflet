class Empleado extends React.Component {
  render () {
    return (
      <li>
        <img src={this.props.imagen} />
        {this.props.nombre} - {this.props.email}
      </li>
    );
  }  
}

class ListaEmpleados extends React.Component {
  render () {
    return (
      <div>
        <ul>
          {
            this.props.empleados.map(empleado => {
              return (<Empleado
                nombre={empleado.nombre}
                email={empleado.email}
                imagen={empleado.imagen}
              />);
            })
          }
        </ul>
        <form onSubmit={this.props.onAddEmployee}>
          <input type="text" placeholder="Nombre" name="nombre" />
          <input type="email" placeholder="Email" name="email" />
          <button type="submit">Añadir</button>
        </form>
      </div>
    );
  }
}

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      empleados : [
        { nombre: "Pepe", email: "pepe@correo.com", imagen: "foto1.png" },
        { nombre: "Paco", email: "paco@correo.com", imagen: "foto2.png" },
        { nombre: "Manolo", email: "manolo@correo.com", imagen: "foto3.png" }
        ]
    }
  }
  
  handleOnAddEmployee (event) {
    event.preventDefault()
    let empleado = {
      nombre: event.target.nombre.value,
      email: event.target.email.value
    }
    
    this.setState({
      empleados: this.state.empleados.concat([empleado])
    })
  }
  
  render () {
   return (
     <ListaEmpleados 
      empleados={this.state.empleados}
      onAddEmployee={this.handleOnAddEmployee.bind(this)}
      />
      )  
  }  
}

ReactDOM.render(<App />, document.getElementById('app'));