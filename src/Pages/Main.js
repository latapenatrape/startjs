const Main = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                Main Page
                <UIButton onClick ={() => navigate ("/auth")}>
                    login
                    </UIButton>

            </div>
        </div>
            );
          
          export default Main;
};