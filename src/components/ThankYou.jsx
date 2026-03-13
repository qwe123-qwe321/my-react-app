import React from 'react';
import { useLocation } from 'react-router-dom';
import illustration from '../assets/illustration-thank-you.svg'; // 替换成你的插图路径

export default function ThankYou() {
  // 从 URL 中获取评分参数
  const location = useLocation();
  const rating = new URLSearchParams(location.search).get('rating');

  return (
    <div className="bg-gray-900 flex flex-col items-center justify-center w-full h-full rounded-2xl p-6 text-center">
      {/* 感谢插图 */}
      <img src={illustration} alt="Thank you" className="w-24 h-24 mb-6" />
      {/* 评分提示 */}
      <div className="bg-gray-800 text-amber-500 px-4 py-1 rounded-full text-sm mb-6">
        You selected {rating} out of 5
      </div>
      {/* 标题 */}
      <h2 className="text-2xl font-bold text-white mb-3">Thank you!</h2>
      {/* 描述 */}
      <p className="text-gray-400 text-sm leading-relaxed">
        We appreciate you taking the time to give a rating.<br />
        If you ever need more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}