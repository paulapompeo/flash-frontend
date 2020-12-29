import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Companies from '../pages/Companies';
import Employees from '../pages/Employees';
import CreateCompany from '../pages/CreateCompany';
import CreateEmployee from '../pages/CreateEmployee';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Companies} />
      <Route path="/createcompany" exact component={CreateCompany} />
      <Route path="/companies/:company/employees/createemployee" exact component={CreateEmployee} />
      <Route path="/companies/:company/employees" exact component={Employees} />
    </Switch>
  );
};

export default Routes;
