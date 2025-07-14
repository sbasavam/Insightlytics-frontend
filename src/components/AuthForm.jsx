const AuthForm = ({ title, children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default AuthForm;
