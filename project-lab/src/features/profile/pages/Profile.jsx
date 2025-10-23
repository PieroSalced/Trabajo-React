import { useAuth } from '../../auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  if (!user) {
    return <div className="p-8 text-center">Cargando perfil...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-200 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="p-8 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-center">
          <h1 className="text-4xl font-bold mb-2">Perfil de Usuario</h1>
          <p className="text-lg">Aquí puedes ver la información de tu cuenta</p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Nombre Completo</p>
              <p className="text-lg font-semibold text-gray-800">{user.name}</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Usuario</p>
              <p className="text-lg font-semibold text-gray-800">{user.user_name}</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <p className="text-lg font-semibold text-gray-800">{user.email}</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">Teléfono</p>
              <p className="text-lg font-semibold text-gray-800">{user.phone}</p>
            </div>
            {user.role && (
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-1">Rol</p>
                <p className="text-lg font-semibold text-gray-800">{user.role.name}</p>
              </div>
            )}
            {user.country && (
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-1">País</p>
                <p className="text-lg font-semibold text-gray-800">{user.country.name}</p>
              </div>
            )}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleLogout}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
