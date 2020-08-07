import React, {Fragment, useState} from 'react';
import { AntDApp } from './antd/AntDApp';
import { ElasticUiApp } from './eui/ElasticUiApp';
import { Switch } from 'antd';

const App = () => {
  const [viewAntD, setViewAntD] = useState(false);
  return (
    <Fragment>
      { viewAntD ? <AntDApp /> : <ElasticUiApp /> }
      <div>
        <Switch onChange={() => setViewAntD(!viewAntD)} />
        <span>{ `Currently viewing ${ viewAntD ? "AntD" : "ElasticUI" } library.` }</span>
      </div>
    </Fragment>
  );
}

export default App;
