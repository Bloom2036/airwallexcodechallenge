# Airwallex Fron-tend Code Challenge



## 项目运行

```bash
cd airwallexcodechallenge

npm install

npm start

```



## 项目结构

```
airwallexcodechallenge 
├── README.md							项目文档说明
├── jsconfig.json						额外配置文件
├── package.json						npm 依赖
├── .gitignore
├── public								
└── src									源码
    ├── commons							公用方法
	│	  └── request.js
    ├── components					    业务组件
    │     ├── RequestFormCmp.js       
	│	  └── SuccessCmp.js
    ├── pages					        页面组件
	│	  └── home
    │	       ├── ContainerCmp
    │	       ├── FooterCmp
    │	       └── HeaderCmp        
    ├── resources                       静态资源 && css 变量
    │       └── css 
    │           └── variables
    ├── services						api
	│   	└── api.js    
    ├── index.css
    ├── index.js						入口js
    ├── reportWebVitals.js
    └── setupTests.js
```

