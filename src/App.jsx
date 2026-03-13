import React from 'react'
import { Routes, Route } from 'react-router-dom';
import FeedbackPage from './pages/FeedbackPage'
import ThankYou from './components/ThankYou';
export default function App() {
  return (
    <div>
       <Routes>
          {/* 评分页 */}
          <Route path="/" element={<FeedbackPage />} />
          {/* 感谢页 */}
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
    </div>
  )
}
