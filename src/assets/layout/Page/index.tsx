import { PageProps } from '../../../interfaces/props/PageProps';
import Menu from '../Menu';
import './styles.css';

function Page(props: PageProps) {
  return (
    <div className="content">
      <Menu />
      <main>
        <div className="main-content">
          {props.content}
        </div>
      </main>
    </div>
  );
}

export default Page;
