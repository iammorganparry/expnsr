 interface UploadIconProps {
     width?: string
     height?: string
 }
 export default function Upload({ width = '24px', height = '24px' }) {
 return (
 <>
 <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill="#FFE7C2" d="M22 14V21C22 21.55 21.55 22 21 22H3C2.45 22 2 21.55 2 21V14" ></path>
<path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" stroke="#f55d3e" d="M22 14V21C22 21.55 21.55 22 21 22H3C2.45 22 2 21.55 2 21V14"></path>
<path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" stroke="#f55d3e" d="M12 17V2"></path>
<path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1" stroke="#f55d3e" d="M7 7L12 2L17 7"></path>
</svg>
</>
)}