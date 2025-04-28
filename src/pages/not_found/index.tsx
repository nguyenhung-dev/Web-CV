import notfoundImg from '@/assets/images/notfound.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <img src={notfoundImg} alt="not found" className="w-[300px] sm:w-[450px] md:w-[600px] lg:w-[700px] object-cover" />
      <div className='text-center px-10'>
        <h1>404 - Không tìm thấy trang</h1>
        <p>Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
        <Link to="/" className='text-blue-600'>Quay về trang chủ</Link>
      </div>
    </div>
  )
}

export default NotFound
