# A React Jest Enzyme Unit Testing Boilerplate
一个通过 Jest & Enzyme 进行单元测试的 React 项目模初始模板, 项目通过 create-react-app 创建.

# stage1: 分支 - 初始化工程配置

### React 项目初始化和编译配置: 
通过 create-react app 创建. 

### Jest & Enzyme 测试配置:
##### 依赖项
~~~
"enzyme": "^3.9.0",
"enzyme-adapter-react-16": "^1.12.1",
"jest-enzyme": "^7.0.2",
~~~

##### jest 配置
使用 create-react-app 默认配置.

##### enzyme 测试前初始化
初始化文件位置: src/setupTest.js
~~~
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
~~~



# 项目启动项命令

### `npm start`


### `npm test`

### `npm run build`


### `npm run eject`

