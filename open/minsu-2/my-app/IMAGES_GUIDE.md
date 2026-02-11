# 图片使用指南

## 概述

网站已配置使用真实图片展示。目前使用的是高质量占位图片（来自 Unsplash），你可以轻松替换为自己的民宿真实照片。

## 图片目录结构

```
public/
├── images/
│   ├── rooms/          # 房间图片
│   │   ├── ocean-king.jpg      # 海景大床房
│   │   ├── garden-twin.jpg     # 园景双床房
│   │   ├── deluxe-suite.jpg    # 豪华海景套房
│   │   ├── family-ocean.jpg    # 家庭海景房
│   │   ├── garden-suite.jpg    # 庭院花园套房
│   │   └── penthouse.jpg       # 顶层豪华别墅
│   └── scenes/         # 场景图片
│       ├── hero.jpg            # 首页Hero图片
│       ├── exterior.jpg        # 民宿外观
│       └── map.jpg             # 地图位置
```

## 替换图片方法

### 方法一：直接替换文件（推荐）

1. 准备你的真实照片，建议尺寸：
   - **房间图片**: 800x600 像素或更大
   - **Hero图片**: 1200x800 像素或更大
   - **外观图片**: 1200x800 像素或更大

2. 将照片重命名为对应的文件名

3. 复制到 `public/images/` 对应目录

4. 修改代码中的图片路径，将 URL 改为本地路径：

```typescript
// 例如，在 page.tsx 中
// 从：
const heroImage = 'https://images.unsplash.com/photo-xxx?w=1200&q=80';

// 改为：
const heroImage = '/images/scenes/hero.jpg';
```

### 方法二：使用在线图片URL

如果不想下载到本地，可以直接使用在线图片链接：

```typescript
const roomImage = 'https://your-cdn.com/room-photo.jpg';
```

记得在 `next.config.ts` 中添加对应的域名：

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-cdn.com',
    },
  ],
}
```

## 当前使用的占位图片

### 首页 Hero 区域
- **图片**: 三亚湾海滩风景
- **URL**: `https://images.unsplash.com/photo-1559628233-eb1b1ee29747?w=1200&q=80`

### 房间图片
1. **海景大床房**: `https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80`
2. **园景双床房**: `https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80`
3. **豪华海景套房**: `https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80`
4. **家庭海景房**: `https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80`
5. **庭院花园套房**: `https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80`
6. **顶层豪华别墅**: `https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80`

### 关于我们页面
- **民宿外观**: `https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80`

### 联系页面
- **地图**: `https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80`

## 图片优化建议

1. **格式**: 使用 JPG 格式（照片）或 PNG 格式（需要透明背景）
2. **压缩**: 使用工具如 TinyPNG 压缩图片大小
3. **尺寸**: 不要上传过大的原始图片，建议宽度不超过 2000 像素
4. **命名**: 使用有意义的文件名，如 `ocean-view-room.jpg`

## 图片加载优化

网站已配置：
- 图片懒加载（滚动到视口才加载）
- 图片缩放动画效果
- 渐变叠加层保护文字可读性
- 响应式图片适配

## 快速替换清单

替换图片时请检查以下文件：

- [ ] `src/app/page.tsx` - 首页 Hero 图片和房间预览
- [ ] `src/app/rooms/page.tsx` - 房间列表图片
- [ ] `src/app/about/page.tsx` - 民宿外观图片
- [ ] `src/app/contact/page.tsx` - 地图图片（可选）

## 注意事项

1. **版权问题**: 确保使用的图片拥有版权或来自免费图库
2. **图片质量**: 使用高质量、光线充足的图片
3. **一致性**: 保持图片风格一致（色调、构图等）
4. **备份**: 替换前备份原始占位图片配置

## 免费图库推荐

- [Unsplash](https://unsplash.com) - 高质量免费图片
- [Pexels](https://pexels.com) - 免费图片和视频
- [Pixabay](https://pixabay.com) - 免费图片和插图

---

**提示**: 如果没有真实照片，当前使用的 Unsplash 占位图也是专业级别的，可以直接用于演示或初期上线。
