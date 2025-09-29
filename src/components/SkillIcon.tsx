import { skillIcons } from "../constants/SkillIcon";
interface SkillIconProps {
  skill: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
export const SkillIcon = ({ skill, size = 'md', className = '' }: SkillIconProps) => {
  const iconUrl = skillIcons[skill];
  
  if (!iconUrl) {
    return (
      <div className={`
        inline-flex items-center justify-center rounded-lg bg-gray-200  text-gray-600  font-medium
        ${size === 'sm' ? 'w-6 h-6 text-xs' : ''}
        ${size === 'md' ? 'w-8 h-8 text-sm' : ''}
        ${size === 'lg' ? 'w-12 h-12 text-base' : ''}
        ${className}
      `}>
        {skill.charAt(0).toUpperCase()}
      </div>
    );
  }

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <img
      src={iconUrl}
      alt={`${skill} icon`}
      className={`
        rounded-lg object-contain
        ${sizeClasses[size]}
        ${className}
      `}
      loading="lazy"
    />
  );
};