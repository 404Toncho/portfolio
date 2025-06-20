// app/components/home/ScrollIndicator.tsx
import "@/styles/scroll-indicator.css";

export default function ScrollIndicator({ className = "" }: { className?: string }) {
    return (
        <div className={`${className}`}>
            <div className="mouse_scroll">
                <span className="mouse_scroll_arrow ett" />
                <span className="mouse_scroll_arrow tva" />
                <span className="mouse_scroll_arrow tre" />
            </div>
        </div>
    );
}
