function ThemeModal({ show, onClose, onSelectTheme }) {
  if (!show) return null;

  return (
    <div
      className="cursor-pointer fixed z-10 w-full h-dvh bg-slate-900"
      onClick={onClose}
    >
      <div className="flex justify-center items-center w-full h-full">
        <div
          className="cursor-default bg-white p-8 rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl dark:text-zinc-900">Choose a Color Scheme</h2>
          <div className="flex justify-center items-center gap-4 mt-4">
            <button
              onClick={() => onSelectTheme('light')}
              className="cursor-pointer shadow-md bg-sweet-cashew-200 text-slate-900 rounded-md p-4"
            >
              Light
            </button>
            <button
              onClick={() => onSelectTheme('dark')}
              className="cursor-pointer shadow-md bg-slate-900 text-cream-cheese-100 rounded-md p-4"
            >
              Dark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeModal;

