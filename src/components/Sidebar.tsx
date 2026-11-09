import "../style/Sidebar.css"

interface SidebarProps {
  onSelectTab: (tab: string) => void;
}

function Sidebar({onSelectTab}: SidebarProps) {
    return (
<aside className="sidebar-externo">
        <button onClick={() => onSelectTab ('Personal')}>Personal</button>
        <button onClick={() => onSelectTab ('Inventario')}>Inventario</button>
        <button onClick={() => onSelectTab ('Incidencias')}>Incidencias</button>
    </aside>
    );
}

export default Sidebar;