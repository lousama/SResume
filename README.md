# SResume
一个简单的网页简历生成器

## 使用

```
# 安装依赖
$ npm install

# 开发模式
# 部署到localhost:2333
# 推荐在开发模式下编辑简历
$ npm run dev

# 打包到 dist 目录
$ npm run build
```

## 配置

只需修改 `/config` 目录下的配置文件。

- `./app.config.js` 全局配置
- `./keywords.js` 配置需要高亮的关键词
- `'./resume.config.js'` 配置简历内容

## 编写模板

### 基本规范

- 在`/style`目录下新建目录，目录名为模板名称
- 必须有一个根 class，且该 class 名称与模板名称一致
- 编写完毕后，在`./entry.less`中注册

### 更多

- 如需加入图片、iconfont等资源，建议将其保存在该模板目录下
- 不建议改动 HTML 结构，如需添加图片图标等元素应使用伪元素
