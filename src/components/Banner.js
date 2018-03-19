// import { dispatch, isClient } from '../utils'

import React from 'react'

const Banner = props => {
  const { dbCount, onlineCount, selfCount } = props
  return (
    <div style={styles.full}>
      <div style={styles.flexContainer}>
        <h1 style={styles.imageTitle}>welcome to maldives holiday</h1>
        <h3 style={styles.imameSubTitle}>{'現在の人数:' + onlineCount}</h3>
        <h3 style={styles.imameSubTitle}>{'累計人数:' + dbCount}</h3>
        <h3 style={styles.imameSubTitle}>{'自分タイムズ:' + selfCount}</h3>
      </div>
      <div style={{ height: '10%', display: 'flex' }}>
        <h3 style={styles.middleText}>拯救世界银河小分队的密码花园</h3>
      </div>
    </div>
  )
}
function handleRequestDelete () {
  alert('You clicked the delete button.')
}
function handleClick () {
  alert('You clicked the Chip.')
}
const data = [
  'Java',
  'JavaScript',
  'Android',
  'strust2',
  'Cookies',
  'token',
  'Session',
  'hibernate',
  'springMVC',
  'SpringBoot',
  'Mysql',
  'SQLServer',
  'linux',
  'ubunto',
  'xCode',
  'Android Studio',
  'react',
  'material-design',
  'SSR',
  'Vue',
  'Angular2.0',
  'Swift',
  'Object-C',
  'react-native',
  'redux',
  'redux-saga',
  'ES6',
  'promise',
  'ajax',
  'fetch',
  'canvas',
  'svg',
  'd3',
  'Html5',
  'CSS3',
  'webSocket',
  'socket',
  'npm',
  'http',
  'https',
  'rxjs',
  'RESTful',
  'SSS',
  'nodejs',
  'git',
  'postMan',
  '404',
  '200',
  'transaction',
  'bootstrap',
  'JQuery',
  'webpack',
  'browser',
  'gradlew',
  'maven',
  'code-push',
  'cotlin',
  'Tcp/ip',
  'eclipse',
  'myEclipse',
  'fontEnd',
  'fullStack',
  'php',
  'python',
  'pip',
  'scrapy',
  'xPath',
  'Chrome',
  'fireFox',
  'BAT',
  'Ec2',
  'CGI',
  'Safari'
]
// class Banner extends React.Component {
//   render () {
//     return (
//       <div style={styles.full}>
//         {data.map(item => (
//           <Chip key={item} onClick={handleClick} style={styles.chip}>
//             {item}
//           </Chip>
//         ))}
//       </div>
//     )
//   }
// }
export default Banner

const styles = {
  full: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 4
  },
  flexContainer: {
    display: 'flex',
    background: 'url("./maldives.jpg") no-repeat center ',
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  imageTitle: {
    display: 'inline-flex',
    color: '#fff',
    fontSize: '2.5rem',
    textAlign: 'center'
  },
  imameSubTitle: {
    display: 'inline-flex',
    color: '#fff',
    fontSize: '1rem'
  },
  middleText: {
    fontSize: '1rem',
    display: 'inline-flex',
    alignSelf: 'center',
    marginLeft: '1.5rem'
  }
}
