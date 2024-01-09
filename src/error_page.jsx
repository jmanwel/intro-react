import { Button } from 'antd';

function ErrorPage() {
  return (
      <div className="error-page">
        <h1>404!</h1>
        <img className="vibrate-1" alt="404" src="../404.png"/>
        <br />
        <Button type="primary" href="/">
          Back to Home
        </Button>
        <br />
        <br />
      </div>          
  );
}

export default ErrorPage;