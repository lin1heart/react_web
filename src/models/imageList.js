import fetch from '../services/fetch';

const SERVER_URL ='http://192.168.0.106:8080/'
const IMAGE_URL = 'http://192.168.0.105:80/image/';

const initialState = {
  imageList: [],
  ratioList: [],
};
const reducers = {
  loadImageList(preState, { imageList }) {
    return { ...preState, imageList };
  },
  loadRatioList(preState, { payload:{ ratioList }}) {
    return { ...preState, ratioList };
  },
};
const effects = {
  *effect({ payload }, { put, call, select, take }) {
    yield 1;
  },
  *test2({ payload }, { put }) {
    console.log('test2 payload', payload);
    yield put({ type: 'test1', test: 'from effects' });
    yield put({ type: 'fetchTest' });
  },
  *getImageList(payload, { put, call }) {
    try {
      const { data: imageList } = yield fetch.get(SERVER_URL + 'image/getList' ,{pageSize:10,pageIndex: 0});
      console.log(' res is ', imageList);
      const ratioList = yield call(calAspectRatio, imageList)
      console.log('ratioList.slice(0,4) is ', ratioList.slice(0,4),ratioList);
      
      const imageHeight = yield calHeight(ratioList.slice(0,4))
      const imageHeight2 = yield calHeight(ratioList.slice(4,7))
      console.log("heigt:!!!",imageHeight,imageHeight2);
      
      yield put({ type:'loadImageList', imageList})
      yield put({ type:'loadRatioList', payload:{ ratioList }})
    } catch (e) {
      console.log('getImageList  with error: ', e);
    }
  },
};
export default {
  namespace: 'imageList',
  state: initialState,
  reducers,
  effects,
};
function calAspectRatio(data) {
  const ratioList = [];
  data.forEach((item ,index)=>{
    let image = new Image();
    image.src = IMAGE_URL + data[index].headImage;
    image.onload = (()=>{
      console.log('onload');
      
      ratioList[index] = image.width/image.height;
    })
  })
  console.log("ratioList222222 is ",ratioList);
  
      return ratioList;
}
function calHeight(arr){
  let aspectRatioSum = 0;
  let body_width =  document.body.clientWidth - 85;
  arr.forEach((item ,index)=>{
    aspectRatioSum += item;
  })
  let heig = body_width/aspectRatioSum;
  console.log("aspectRatioSum",aspectRatioSum,body_width,arr);
  
  return heig; 
}
// async function aa (data) {
//   const ratioList = [];
//   for(let item in data) {
//     let image = new Image();
//     image.src = IMAGE_URL + data[index].headImage;
//     image.onload = (()=>{
//       console.log('onload');
//       ratioList[index] = image.width/image.height;
//     })
//   }
// }