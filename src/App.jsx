import { useState } from 'react';
import Tabs from './Tabs';

function App() {
  const [tabLinks, setTabLinks] = useState([
    {
      id: 1,
      tabName: 'users',
      tabId: 'users-tab',
      isActive: true,
      url: 'https://jsonplaceholder.typicode.com/users',
    },
    {
      id: 2,
      tabName: 'posts',
      tabId: 'posts-tab',
      isActive: false,
      url: 'https://jsonplaceholder.typicode.com/posts',
    },
    {
      id: 3,
      tabName: 'comments',
      tabId: 'comments-tab',
      isActive: false,
      url: 'https://jsonplaceholder.typicode.com/comments',
    },
  ]);
  const [contentURL, setContentURL] = useState(
    'https://jsonplaceholder.typicode.com/users'
  );

  function handleActiveTab(id) {
    const activeTab = tabLinks.find((item) => item.id === id);

    const newTabs = tabLinks.map((tab) =>
      tab.id == id ? { ...tab, isActive: true } : { ...tab, isActive: false }
    );

    setTabLinks(newTabs);
    setContentURL(activeTab.url);
  }

  return (
    <main className="main">
      <Tabs tabLinks={tabLinks} handleActiveTab={handleActiveTab} />
    </main>
  );
}

export default App;
