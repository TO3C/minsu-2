# 流云智炬 - 三亚湾精品民宿网站

一个现代化的民宿展示网站，支持中文、英文、俄文三语切换，采用清新的三亚海滩风格设计。

## 项目特性

- **多语言支持**：中文、英文、俄文无缝切换
- **响应式设计**：完美适配手机、平板、桌面端
- **清新设计风格**：三亚海滩主题配色（海蓝、珊瑚橙、米白）
- **玻璃态效果**：现代化的 Glassmorphism UI 设计
- **静态导出**：支持 GitHub Pages 免费托管
- **表单集成**：预订和联系表单使用 Formspree（免费）

## 页面结构

- **首页**：品牌展示、特色介绍、房间预览
- **房间展示**：6种房型，支持筛选
- **预订页面**：完整预订表单
- **关于我们**：品牌故事、团队介绍
- **联系方式**：联系表单、地图位置

## 技术栈

- Next.js 14 + TypeScript
- Tailwind CSS
- React Hooks（状态管理）

## 本地开发

```bash
cd my-app
npm install
npm run dev
```

访问 http://localhost:3000

## 部署到 GitHub Pages

### 1. 创建 GitHub 仓库

在 GitHub 创建新仓库，例如 `liuyunzhiju-website`

### 2. 配置 GitHub Actions

在项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install dependencies
        working-directory: ./my-app
        run: npm ci
      - name: Build
        working-directory: ./my-app
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./my-app/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 3. 启用 GitHub Pages

1. 进入仓库 Settings → Pages
2. Source 选择 "GitHub Actions"
3. 推送代码到 main 分支

### 4. 访问网站

部署完成后，访问 `https://你的用户名.github.io/liuyunzhiju-website`

## 配置表单服务

网站使用 [Formspree](https://formspree.io) 处理表单提交（免费版每月50次提交）。

### 设置步骤：

1. 访问 https://formspree.io 注册账号
2. 创建新表单，获取表单 ID（格式：`xxxxxxxx`）
3. 更新以下文件中的 `YOUR_FORM_ID`：
   - `src/app/booking/page.tsx` 第32行
   - `src/app/contact/page.tsx` 第23行

将：
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

改为：
```typescript
const response = await fetch('https://formspree.io/f/xxxxxxxx', {
```

4. 重新构建并部署

## 自定义内容

### 修改房间信息

编辑 `src/app/rooms/page.tsx` 中的 `rooms` 数组

### 修改联系信息

编辑 `src/app/contact/page.tsx` 中的 `contactInfo` 数组

### 修改品牌信息

编辑 `src/lib/translations.ts` 中的翻译内容

## 项目结构

```
my-app/
├── src/
│   ├── app/                    # 页面组件
│   │   ├── page.tsx           # 首页
│   │   ├── rooms/page.tsx     # 房间展示
│   │   ├── booking/page.tsx   # 预订页面
│   │   ├── about/page.tsx     # 关于我们
│   │   ├── contact/page.tsx   # 联系方式
│   │   ├── layout.tsx         # 根布局
│   │   └── globals.css        # 全局样式
│   ├── components/            # 公共组件
│   │   ├── navigation.tsx     # 导航栏
│   │   └── footer.tsx         # 页脚
│   └── lib/                   # 工具库
│       ├── translations.ts    # 多语言翻译
│       └── language-context.tsx # 语言上下文
├── dist/                      # 构建输出
└── package.json
```

## 设计系统

### 配色方案
- **主色（海蓝）**：#4ECDC4
- **强调色（珊瑚橙）**：#FF6B6B
- **背景色（米白）**：#F7F7F7
- **文字主色**：#1A3A52
- **文字次色**：#5A6A7A

### 字体
- 使用系统默认无衬线字体栈
- 中文：系统默认中文字体
- 英文/俄文：系统默认字体

### 动画效果
- 页面滚动渐入动画
- 悬浮效果
- 玻璃态模糊效果
- 按钮悬停动效

## 许可证

MIT License

---

**流云智炬** - 在三亚，遇见最美的自己 🏖️
