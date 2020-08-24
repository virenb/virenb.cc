import useDarkMode from 'use-dark-mode';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div>
      <input
        name='darkmode'
        type='checkbox'
        checked={darkMode.value}
        onChange={darkMode.toggle}
      />
      <label htmlFor='darkmode'>
        <span img='role' aria-label='Crescent Moon'>
          &#127769;
        </span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
