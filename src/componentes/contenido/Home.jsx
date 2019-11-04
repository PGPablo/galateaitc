// LIBS
import React from 'react'
import axios from 'axios';

import { Collapse, Icon, Button, Radio } from 'antd'

import TopBar from '../base/TopBar'

import img1 from '../../img/1.png'
import img2 from '../../img/2.png'
import img3 from '../../img/3.png'
import img4 from '../../img/4.png'
import img5 from '../../img/5.png'
import imgSi from '../../img/si.png'
import imgNo from '../../img/no.png'


//ASSETS
import '../../css/Home.css'

const { Panel } = Collapse;

class Home extends React.Component {
  state = {
    pregunta1: "",
    pregunta2: "",
    pregunta3: "",
    pregunta4: "",
    pregunta5: "",
    pregunta6: "",
    pregunta7: "",
    pregunta8: "",
    pregunta9: "",
    pregunta10: "",
    pregunta11: "",
  };

  onChange1 = e => { this.setState({ pregunta1: e.target.value, }) }
  onChange2 = e => { this.setState({ pregunta2: e.target.value, }) }
  onChange3 = e => { this.setState({ pregunta3: e.target.value, }) }
  onChange4 = e => { this.setState({ pregunta4: e.target.value, }) }
  onChange5 = e => { this.setState({ pregunta5: e.target.value, }) }
  onChange6 = e => { this.setState({ pregunta6: e.target.value, }) }
  onChange7 = e => { this.setState({ pregunta7: e.target.value, }) }
  onChange8 = e => { this.setState({ pregunta8: e.target.value, }) }
  onChange9 = e => { this.setState({ pregunta9: e.target.value, }) }
  onChange10 = e => { this.setState({ pregunta10: e.target.value, }) }
  onChange11 = e => { this.setState({ pregunta11: e.target.value, }) }

  SubmitDia = () => {
    let data = JSON.stringify({
        Usuario: localStorage.getItem("email"),
        pregunta_1: this.state.pregunta1,
        pregunta_2: this.state.pregunta2,
        pregunta_3: this.state.pregunta3
    })

    axios.post('http://localhost:8000/api/EncuestaDiariaList/', data, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Token "+localStorage.getItem("token"),
        }
    }
    )
  }

  SubmitInicio = () => {
    let data = JSON.stringify({
        Usuario: localStorage.getItem("email"),
        pregunta_1: this.state.pregunta1,
        pregunta_2: this.state.pregunta2,
        pregunta_3: this.state.pregunta3,
        pregunta_4: this.state.pregunta4,
        pregunta_5: this.state.pregunta5,
        pregunta_6: this.state.pregunta6,
        pregunta_7: this.state.pregunta7,
        pregunta_8: this.state.pregunta8,
        pregunta_9: this.state.pregunta9,
    })

    axios.post('http://localhost:8000/api/EncuestaInicialList/', data, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Token "+localStorage.getItem("token"),
        }
    }
    )
  }
  SubmitFin = () => {
    let data = JSON.stringify({
        Usuario: localStorage.getItem("email"),
        pregunta_1: this.state.pregunta1,
        pregunta_2: this.state.pregunta2,
        pregunta_3: this.state.pregunta3,
        pregunta_4: this.state.pregunta4,
        pregunta_5: this.state.pregunta5,
        pregunta_6: this.state.pregunta6,
        pregunta_7: this.state.pregunta7,
        pregunta_8: this.state.pregunta8,
        pregunta_9: this.state.pregunta9,
        pregunta_10: this.state.pregunta10,
        pregunta_11: this.state.pregunta11,
    })

    axios.post('http://localhost:8000/api/EncuestaFinalList/', data, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Token "+localStorage.getItem("token"),
        }
    }
    )
  }


  render(){
    return(
      <div className="Home-fondo">
        <TopBar />
          <div className="container">

          <Collapse
            bordered={true}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => <Icon type="message" theme="twoTone" twoToneColor="#eb2f96" />}
            className="borde-menu"
          >
            <Panel header="Test diario" key="1" className="color-fondo customPanelStyle">
              <div className="texto-centrado">
                <form onSubmit={this.SubmitDia}>
                  <div className="martop-2">
                    <label className="ant-typography">¿Te sentiste motivado en tus clases?</label> <br />
                    <div className="form-check form-check-inline">

                      <Radio.Group onChange={this.onChange1}>
                        <label className="form-check-label" ><img src={img1} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value="MM"></Radio>
                        <label className="form-check-label" ><img src={img2} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value="M"></Radio>
                        <label className="form-check-label" ><img src={img3} className="icono-encuestra" alt="3punto" /></label>
                        <Radio value="R"></Radio>
                        <label className="form-check-label" ><img src={img4} className="icono-encuestra" alt="4punto" /></label>
                        <Radio value="B"></Radio>
                        <label className="form-check-label" ><img src={img5} className="icono-encuestra" alt="5punto" /></label>
                        <Radio value="MB"></Radio>
                      </Radio.Group>

                    </div> <br />
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography">¿Cuál fue tu nivel de estrés promedio en el día?</label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange2}>
                        <label className="form-check-label" ><img src={img1} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value="MM"></Radio>
                        <label className="form-check-label" ><img src={img2} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value="M"></Radio>
                        <label className="form-check-label" ><img src={img3} className="icono-encuestra" alt="3punto" /></label>
                        <Radio value="R"></Radio>
                        <label className="form-check-label" ><img src={img4} className="icono-encuestra" alt="4punto" /></label>
                        <Radio value="B"></Radio>
                        <label className="form-check-label" ><img src={img5} className="icono-encuestra" alt="5punto" /></label>
                        <Radio value="MB"></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography">¿Mañana sera un dia mejor?</label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange3}>
                        <label className="form-check-label" ><img src={img1} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value="MM"></Radio>
                        <label className="form-check-label" ><img src={img2} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value="M"></Radio>
                        <label className="form-check-label" ><img src={img3} className="icono-encuestra" alt="3punto" /></label>
                        <Radio value="R"></Radio>
                        <label className="form-check-label" ><img src={img4} className="icono-encuestra" alt="4punto" /></label>
                        <Radio value="B"></Radio>
                        <label className="form-check-label" ><img src={img5} className="icono-encuestra" alt="5punto" /></label>
                        <Radio value="MB"></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <Button type="primary" className="martop-2" htmlType="submit" ghost> Enviar datos </Button>
                </form>
              </div>
            </Panel>


            <Panel header="Test inicial" key="2" className="color-fondo customPanelStyle">
              <div className="texto-centrado">
                <form onSubmit={this.SubmitInicio}>
                  <div className="martop-2">
                    <label className="ant-typography">¿Te despiertas con ánimo por las mañanas?</label> <br />
                      <Radio.Group onChange={this.onChange1}>
                        <label className="form-check-label" ><img src={img1} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value="MM"></Radio>
                        <label className="form-check-label" ><img src={img2} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value="M"></Radio>
                        <label className="form-check-label" ><img src={img3} className="icono-encuestra" alt="3punto" /></label>
                        <Radio value="R"></Radio>
                        <label className="form-check-label" ><img src={img4} className="icono-encuestra" alt="4punto" /></label>
                        <Radio value="B"></Radio>
                        <label className="form-check-label" ><img src={img5} className="icono-encuestra" alt="5punto" /></label>
                        <Radio value="MB"></Radio>
                      </Radio.Group>
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography">¿Asistir a la universidad es una fuente de estrés?</label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange2}>
                        <label className="form-check-label" ><img src={img1} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value="MM"></Radio>
                        <label className="form-check-label" ><img src={img2} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value="M"></Radio>
                        <label className="form-check-label" ><img src={img3} className="icono-encuestra" alt="3punto" /></label>
                        <Radio value="R"></Radio>
                        <label className="form-check-label" ><img src={img4} className="icono-encuestra" alt="4punto" /></label>
                        <Radio value="B"></Radio>
                        <label className="form-check-label" ><img src={img5} className="icono-encuestra" alt="5punto" /></label>
                        <Radio value="MB"></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography">¿En tus clases, prestas atención el 100% del tiempo en clase?</label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange3}>
                        <label className="form-check-label" ><img src={img1} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value="MM"></Radio>
                        <label className="form-check-label" ><img src={img2} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value="M"></Radio>
                        <label className="form-check-label" ><img src={img3} className="icono-encuestra" alt="3punto" /></label>
                        <Radio value="R"></Radio>
                        <label className="form-check-label" ><img src={img4} className="icono-encuestra" alt="4punto" /></label>
                        <Radio value="B"></Radio>
                        <label className="form-check-label" ><img src={img5} className="icono-encuestra" alt="5punto" /></label>
                        <Radio value="MB"></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography"> ¿Te sientes motivado a lo largo del día? </label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange4}>
                        <label className="form-check-label" ><img src={img1} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value="MM"></Radio>
                        <label className="form-check-label" ><img src={img2} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value="M"></Radio>
                        <label className="form-check-label" ><img src={img3} className="icono-encuestra" alt="3punto" /></label>
                        <Radio value="R"></Radio>
                        <label className="form-check-label" ><img src={img4} className="icono-encuestra" alt="4punto" /></label>
                        <Radio value="B"></Radio>
                        <label className="form-check-label" ><img src={img5} className="icono-encuestra" alt="5punto" /></label>
                        <Radio value="MB"></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography">¿Estás satisfecho con tu desempeño académico?</label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange5}>
                        <label className="form-check-label" ><img src={img1} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value="MM"></Radio>
                        <label className="form-check-label" ><img src={img2} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value="M"></Radio>
                        <label className="form-check-label" ><img src={img3} className="icono-encuestra" alt="3punto" /></label>
                        <Radio value="R"></Radio>
                        <label className="form-check-label" ><img src={img4} className="icono-encuestra" alt="4punto" /></label>
                        <Radio value="B"></Radio>
                        <label className="form-check-label" ><img src={img5} className="icono-encuestra" alt="5punto" /></label>
                        <Radio value="MB"></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography">¿Confías en tus habilidades para afrontar los retos propuestos por tu carrera?</label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange6}>
                        <label className="form-check-label" ><img src={img1} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value="MM"></Radio>
                        <label className="form-check-label" ><img src={img2} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value="M"></Radio>
                        <label className="form-check-label" ><img src={img3} className="icono-encuestra" alt="3punto" /></label>
                        <Radio value="R"></Radio>
                        <label className="form-check-label" ><img src={img4} className="icono-encuestra" alt="4punto" /></label>
                        <Radio value="B"></Radio>
                        <label className="form-check-label" ><img src={img5} className="icono-encuestra" alt="5punto" /></label>
                        <Radio value="MB"></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography">¿Alguien, ademas de ti, está al tanto de tu desarrollo como universitario?</label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange7}>
                        <label className="form-check-label" ><img src={imgSi} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value={true}></Radio>
                        <label className="form-check-label" ><img src={imgNo} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value={false}></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography">¿Has buscado métodos para mejorar tu rendimiento?</label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange8}>
                        <label className="form-check-label" ><img src={imgSi} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value={true}></Radio>
                        <label className="form-check-label" ><img src={imgNo} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value={false}></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography">¿Te responsabilizas de tus éxitos o de tus fracasos?</label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange9}>
                        <label className="form-check-label" ><img src={imgSi} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value={true}></Radio>
                        <label className="form-check-label" ><img src={imgNo} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value={false}></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <Button type="primary" className="martop-2" htmlType="submit" ghost> Enviar datos </Button>
                </form>
              </div>
            </Panel>


            <Panel header="Test final" key="3" className="color-fondo customPanelStyle">
              <div className="texto-centrado">
                <form onSubmit={this.SubmitFin}>
                  <div className="martop-2">
                    <label className="ant-typography">¿Te despiertas con ánimo por las mañanas?</label> <br />
                      <Radio.Group onChange={this.onChange1}>
                        <label className="form-check-label" ><img src={img1} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value="MM"></Radio>
                        <label className="form-check-label" ><img src={img2} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value="M"></Radio>
                        <label className="form-check-label" ><img src={img3} className="icono-encuestra" alt="3punto" /></label>
                        <Radio value="R"></Radio>
                        <label className="form-check-label" ><img src={img4} className="icono-encuestra" alt="4punto" /></label>
                        <Radio value="B"></Radio>
                        <label className="form-check-label" ><img src={img5} className="icono-encuestra" alt="5punto" /></label>
                        <Radio value="MB"></Radio>
                      </Radio.Group>
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography">¿Asistir a la universidad es una fuente de estrés?</label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange2}>
                        <label className="form-check-label" ><img src={img1} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value="MM"></Radio>
                        <label className="form-check-label" ><img src={img2} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value="M"></Radio>
                        <label className="form-check-label" ><img src={img3} className="icono-encuestra" alt="3punto" /></label>
                        <Radio value="R"></Radio>
                        <label className="form-check-label" ><img src={img4} className="icono-encuestra" alt="4punto" /></label>
                        <Radio value="B"></Radio>
                        <label className="form-check-label" ><img src={img5} className="icono-encuestra" alt="5punto" /></label>
                        <Radio value="MB"></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography">¿En tus clases, prestas atención el 100% del tiempo en clase?</label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange3}>
                        <label className="form-check-label" ><img src={img1} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value="MM"></Radio>
                        <label className="form-check-label" ><img src={img2} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value="M"></Radio>
                        <label className="form-check-label" ><img src={img3} className="icono-encuestra" alt="3punto" /></label>
                        <Radio value="R"></Radio>
                        <label className="form-check-label" ><img src={img4} className="icono-encuestra" alt="4punto" /></label>
                        <Radio value="B"></Radio>
                        <label className="form-check-label" ><img src={img5} className="icono-encuestra" alt="5punto" /></label>
                        <Radio value="MB"></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography"> ¿Te sientes motivado a lo largo del día? </label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange4}>
                        <label className="form-check-label" ><img src={img1} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value="MM"></Radio>
                        <label className="form-check-label" ><img src={img2} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value="M"></Radio>
                        <label className="form-check-label" ><img src={img3} className="icono-encuestra" alt="3punto" /></label>
                        <Radio value="R"></Radio>
                        <label className="form-check-label" ><img src={img4} className="icono-encuestra" alt="4punto" /></label>
                        <Radio value="B"></Radio>
                        <label className="form-check-label" ><img src={img5} className="icono-encuestra" alt="5punto" /></label>
                        <Radio value="MB"></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography">¿Estás satisfecho con tu desempeño académico?</label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange5}>
                        <label className="form-check-label" ><img src={img1} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value="MM"></Radio>
                        <label className="form-check-label" ><img src={img2} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value="M"></Radio>
                        <label className="form-check-label" ><img src={img3} className="icono-encuestra" alt="3punto" /></label>
                        <Radio value="R"></Radio>
                        <label className="form-check-label" ><img src={img4} className="icono-encuestra" alt="4punto" /></label>
                        <Radio value="B"></Radio>
                        <label className="form-check-label" ><img src={img5} className="icono-encuestra" alt="5punto" /></label>
                        <Radio value="MB"></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography">¿Confías en tus habilidades para afrontar los retos propuestos por tu carrera?</label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange6}>
                        <label className="form-check-label" ><img src={img1} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value="MM"></Radio>
                        <label className="form-check-label" ><img src={img2} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value="M"></Radio>
                        <label className="form-check-label" ><img src={img3} className="icono-encuestra" alt="3punto" /></label>
                        <Radio value="R"></Radio>
                        <label className="form-check-label" ><img src={img4} className="icono-encuestra" alt="4punto" /></label>
                        <Radio value="B"></Radio>
                        <label className="form-check-label" ><img src={img5} className="icono-encuestra" alt="5punto" /></label>
                        <Radio value="MB"></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography">¿Alguien, ademas de ti, está al tanto de tu desarrollo como universitario?</label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange7}>
                        <label className="form-check-label" ><img src={imgSi} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value={true}></Radio>
                        <label className="form-check-label" ><img src={imgNo} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value={false}></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography">¿Has buscado métodos para mejorar tu rendimiento?</label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange8}>
                        <label className="form-check-label" ><img src={imgSi} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value={true}></Radio>
                        <label className="form-check-label" ><img src={imgNo} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value={false}></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography">¿Te responsabilizas de tus éxitos o de tus fracasos?</label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange9}>
                        <label className="form-check-label" ><img src={imgSi} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value={true}></Radio>
                        <label className="form-check-label" ><img src={imgNo} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value={false}></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography">¿Consideras que este aplicación te fue útil para mejorar tu rendimiento?</label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange10}>
                        <label className="form-check-label" ><img src={imgSi} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value={true}></Radio>
                        <label className="form-check-label" ><img src={imgNo} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value={false}></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <div className="martop-2">
                    <label className="ant-typography">¿Crees que el tiempo fue suficiente para desarrollar un comportamiento diferente en ti?</label> <br />
                    <div className="form-check form-check-inline">
                      <Radio.Group onChange={this.onChange11}>
                        <label className="form-check-label" ><img src={imgSi} className="icono-encuestra" alt="1punto" /></label>
                        <Radio value={true}></Radio>
                        <label className="form-check-label" ><img src={imgNo} className="icono-encuestra" alt="2punto" /></label>
                        <Radio value={false}></Radio>
                      </Radio.Group>
                    </div> <br />
                  </div>
                  <Button type="primary" className="martop-2" htmlType="submit" ghost> Enviar datos </Button>
                </form>
              </div>
            </Panel>

          </Collapse>

          </div>
      </div>
    )
  }
}


export default Home
