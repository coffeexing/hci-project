# SEADS - Smart Emotion Aware Driving System

一个基于React + Vite的现代化网站项目，展示智能情感感知驾驶系统的研究成果。

## 特性

- ⚡️ **Vite** - 快速的构建工具
- ⚛️ **React 18** - 最新的React版本
- 🎨 **Tailwind CSS** - 通过CDN引入，无需配置
- 🎬 **Framer Motion** - 流畅的动画效果
- 📱 **响应式设计** - 完美适配各种设备
- 🎯 **现代化UI** - 使用Material Symbols图标

## 动画效果

项目包含多种精心设计的动画效果：

### 导航栏
- 页面加载时的滑入动画
- 鼠标悬停时的缩放效果
- 滚动时的背景模糊变化

### Hero区域
- 渐进式内容展示
- 呼吸灯效果的状态指示器
- 渐变文字动画
- 脉动的背景光晕

### Problem区域
- 左右分栏的滑入动画
- 图片的灰度过滤效果
- 统计卡片的弹出动画
- 数字跳动效果

### Solutions区域
- 卡片的阶梯式出现
- 悬停时的上浮和缩放
- 图标的旋转动画

### Team区域
- 团队成员卡片的缩放入场
- 头像的旋转效果
- 悬停时的上浮动画

## 安装和运行

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```
项目将在 http://localhost:5173 运行

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 项目结构

```
seads-react/
├── public/              # 静态资源
├── src/
│   ├── components/      # React组件
│   │   ├── Navbar.jsx   # 导航栏组件
│   │   ├── Hero.jsx     # 首屏组件
│   │   ├── Problem.jsx  # 问题陈述组件
│   │   ├── Solutions.jsx # 解决方案组件
│   │   ├── Team.jsx     # 团队组件
│   │   └── Footer.jsx   # 页脚组件
│   ├── App.jsx          # 主应用组件
│   ├── main.jsx         # 应用入口
│   └── index.css        # 全局样式
├── index.html           # HTML模板
└── package.json         # 项目配置
```

## 技术栈

- **React** - UI框架
- **Vite** - 构建工具
- **Framer Motion** - 动画库
- **Tailwind CSS** - CSS框架（CDN）
- **Google Fonts** - Inter和Outfit字体
- **Material Symbols** - 图标库

## 自定义主题

项目使用自定义的颜色主题：

- `midnight`: #050505 - 主背景色
- `road-grey`: #2D2D2D - 次要背景色
- `signal-green`: #10B981 - 强调色（绿色）
- `signal-yellow`: #F59E0B - 警告色（黄色）
- `signal-red`: #EF4444 - 危险色（红色）

## 浏览器支持

支持所有现代浏览器：
- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## License

MIT License
