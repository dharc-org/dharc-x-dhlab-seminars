// import Image from "next/image";
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome
import SeminarContent from './SeminarContent';

export const metadata = {
  title: 'DH.arc & DHLab Seminar',
  description: 'Building Knowledge Landscapes Across the Digital Humanities',
}

export default function Home() {
  return (
    <main>
      <SeminarContent />
    </main>
  );
}
