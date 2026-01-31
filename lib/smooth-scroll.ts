export const handleScroll = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();

    const element = document.getElementById(id);

    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    }
};