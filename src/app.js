import { useLaunch } from '@tarojs/taro'
import { RecoilRoot } from 'recoil';

import 'windi.css';
import 'taro-ui/dist/style/index.scss'
import './app.scss'


function App({ children }) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return <RecoilRoot>{children}</RecoilRoot>
}

export default App
