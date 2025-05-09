  import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

  container:{
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#161a24'
  },
  input:{
    height: 40,
    borderColor: '#ffff',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: '#ffff'
  },

  contBotao:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    gap: '10px',
    flexWrap: "wrap",




  },
  botao:{
    backgroundColor: '#1d273d',
    width: "px",
    height: "40px",
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#c0d3fc',
    borderWidth: '2px',
    borderRadius: '10px'
  },
  textobotao:{
    color: '#ffff',
    fontFamily: 'Arial',
    fontSize: '20px',

  },
  textoTitulo:{
    color:'#ffff',
    fontFamily:'Arial',
    fontSize: "30px",
    textAlign:'center',
    marginBottom: '40px'


  }
})
