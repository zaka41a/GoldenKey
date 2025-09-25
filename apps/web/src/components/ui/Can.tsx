import { useAuth } from '../../lib/auth';
export default function Can({ permission, children }: { permission: string; children: React.ReactNode }) {
const { permissions } = useAuth();
return permissions.includes(permission) ? <>{children}</> : null;
}