import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import StarIconarea from '../components/StarIcon'
import TextViewarea from '../components/TextView'
import NumberRating from '../components/NumberRating'
import SubmitButton from '../components/SubmitButton'
export default function FeedbackCard() {
  const [selectedRating,setSelectedRating] = useState(0)
  const navigate = useNavigate()

    const handleSubmit = () => {
    if (selectedRating === 0) {
      alert('请先选择评分！');
      return;
    }
    if (selectedRating >= 4) {
      // 跳转到感谢页，并携带评分参数
      navigate(`/thank-you?rating=${selectedRating}`);
    } else {
      alert('感谢你的反馈，我们会继续改进！');
    }
  };
  return (
    <div className='bg-gray-900 flex items-center justify-center w-100 h-100 rounded-2xl relative'>
     <StarIconarea></StarIconarea>
      <TextViewarea></TextViewarea>
      <NumberRating  
      selectedRating={selectedRating} 
        onSelect={setSelectedRating}
        />
      <SubmitButton onClick={handleSubmit}></SubmitButton>
    </div>
  )
}
