import { useState } from 'react';

const navFunctions = () => {
  const [showList, setShowList] = useState('');

  window.onclick = () => setShowList('');

  const toggleSubList = (e, label) => {
    e.stopPropagation();
    const { target } = e;
    if (
      target.innerHTML === label ||
      target.parentElement.children[0].innerHTML === label
    ) {
      setShowList(label);
    }
  };

  return { showList, setShowList, toggleSubList };
};

export default navFunctions;
