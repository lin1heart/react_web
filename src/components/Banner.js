// import { dispatch, isClient } from '../utils'

import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import SvgIconFace from 'material-ui/svg-icons/action/face'

// const Banner = () => {
//     return (
//       <div style={styles.full}>
//         <div style={styles.flexContainer}>
//           <h1 style={styles.imageTitle}>welcome to maldives holiday</h1>
//           <h2 style={styles.imameSubTitle}>WYSIWYG</h2>
//         </div>
//         <div style={{ height: '10%', display: 'flex' }}>
//           <h3 style={styles.middleText}>拯救世界银河小分队的密码花园</h3>
//         </div>
//       </div>
//     )
//   }
function handleRequestDelete() {
alert('You clicked the delete button.');
}
function handleClick() {
alert('You clicked the Chip.');
}
const data =['Java', 'JavaScript', 'Android','strust2', 'Cookies','token', 'Session','hibernate',
'springMVC','SpringBoot', 'Mysql','SQLServer', 'linux', 'ubunto', 'xCode', 'Android Studio',
'react',' material-design','SSR', 'Vue', 'Angular2.0', 'Swift', 'Object-C', 'react-native',
'redux', 'redux-saga', 'ES6','Html5', 'CSS3', 'webSocket', 'npm', 'http', 'https','rxjs',
'RESTful', 'SSS', 'nodejs', 'git', 'postMan', '404', '200', 'transaction', 'bootstrap',
'JQuery', 'webpack','browser', 'gradlew', 'maven', 'code-push', 'cotlin', 'Tcp/ip',
'eclipse', 'myEclipse', 'fontEnd', 'fullStack', 'php', 'python', 'Chrome', 'fireFox', 
'BAT', 'Ec2', '我', '实','在','是','想','不','下','去','啦' ]
class Banner extends React.Component {
    render() {
      return (
        <div style={styles.full}>
        {data.map((item)=><Chip
            key={item}
            onClick={handleClick}
            style={styles.chip}
          >
            {item}
          </Chip>)}
        </div>
      );
    }
  }
export default Banner

const styles = {
    full: {
    //   width: '100%',
    //   height: '100%',
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
        margin: 4,
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
      marginTop: '1rem',
      fontSize: '2rem'
    },
    middleText: {
      fontSize: '1rem',
      display: 'inline-flex',
      alignSelf: 'center',
      marginLeft: '1.5rem'
    }
  }
  