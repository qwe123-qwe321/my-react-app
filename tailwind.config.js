/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // 扫描所有 React 组件文件
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1890ff", // 和 AntD 主色对齐
      },
    },
  },
  corePlugins: {
    preflight: false, // 避免和 AntD 样式冲突
  },
  plugins: [],
}