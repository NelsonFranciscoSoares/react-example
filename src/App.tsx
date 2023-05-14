import './App.css';
import { Button } from './button/ButtonClass';
import { Clock } from './clock/Clock';
import { ChildToParent } from './communication/ChildToParent';
import { ParentToChild } from './communication/ParentToChild';
import { DropDownMenu } from './dropDownMenu/DropDownMenu';
import { ContactUsForm } from './form/ContactUsForm';
import { ExampleForm } from './form/ExampleForm';
import { SigninForm } from './form/SigningForm';
import { Hello } from './hello/HelloClassWithState';
import { fruitsData } from './list/MockList';
import { FruitList } from './list/MultipleComponents';
import { MOCK_PROJECTS } from './projects/MockProjects';
import ProjectsPage from './projects/ProjectsPage';
import { ExampleUseState } from './state/State';

function App() {
  return (
    <div>
        {/* <Hello name="Francisco" enthusiasmLevel={2}></Hello> */}
        {/* <FruitList fruits={fruitsData}></FruitList> */}
        {/* <Button></Button> */}
        {/* <ProjectsPage></ProjectsPage> */}
        {/* <ExampleUseState></ExampleUseState> */}
        {/* <DropDownMenu></DropDownMenu> */}
        {/* <ParentToChild></ParentToChild> */}
        {/* <ChildToParent></ChildToParent> */}
        {/* <ExampleForm></ExampleForm> */}
        {/* <SigninForm></SigninForm> */}
        <ContactUsForm></ContactUsForm>
    </div>
  );
}

export default App;
