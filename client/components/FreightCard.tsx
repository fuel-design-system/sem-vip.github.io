import { Sparkles, MessageCircle } from "lucide-react";
import type { Freight } from "@/shared/types";
import styles from "./FreightCard.module.scss";

interface FreightCardProps {
  freight: Freight;
  onClick?: () => void;
}

export function FreightCard({ freight, onClick }: FreightCardProps) {
  return (
    <div className={styles['freight-card']} onClick={onClick}>
      {/* Card Content */}
      <div className={styles['card-content']}>
        {/* Price and Details */}
        <div className={styles['price-section']}>
          <h3 className={styles.price}>{freight.price}</h3>
          <div className={styles['details-row']}>
            <span>{freight.paymentType}</span>
            <span>•</span>
            <span>{freight.priceBy}</span>
            <span>•</span>
            <span>{freight.loadType}</span>
          </div>
          <div className={styles['details-row']}>
            <span>{freight.weight}</span>
            <span>•</span>
            <span>{freight.distance}</span>
            <span>•</span>
            <span>{freight.cargo}</span>
          </div>
        </div>

        {/* Route */}
        <div className={styles['route-section']}>
          <svg width="7" height="46" viewBox="0 0 7 46" fill="none" className={styles['route-icon']}>
            <circle cx="3.5" cy="8.5" r="3" stroke="#DFE1E6"/>
            <rect x="3" y="16" width="1" height="14" fill="#DFE1E6"/>
            <path d="M6.19141 34.5L3.5 39.8818L0.808594 34.5H6.19141Z" stroke="#DFE1E6"/>
          </svg>
          <div className={styles['route-info']}>
            <p className={styles['route-location']}>{freight.origin}</p>
            <p className={styles['route-location']}>{freight.destination}</p>
          </div>
        </div>

        {/* Divider */}
        <div className={styles['divider-wrapper']}>
          <div className={styles.divider}></div>
        </div>

        {/* Publisher */}
        <div className={styles['publisher-section']}>
          <div className={styles['publisher-avatar']}>
            <svg width="6" height="6" viewBox="0 0 10 10" fill="none" className={styles['publisher-status']}>
              <path d="M5 1C7.20914 1 9 2.79086 9 5C9 7.20914 7.20914 9 5 9C2.79086 9 1 7.20914 1 5C1 2.79086 2.79086 1 5 1Z" fill="#0AB15F" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
          <div className={styles['publisher-info']}>
            <span className={styles['publisher-label']}>Publicado por</span>
            <span className={styles['publisher-name']}>{freight.publisher}</span>
          </div>
        </div>
      </div>

      {/* Tags - Top Right */}
      <div className={styles['tags-container']}>
        {freight.isNew && (
          <div className={`${styles.tag} ${styles['tag-new']}`}>
            <Sparkles />
            <span>NOVO</span>
          </div>
        )}
        {freight.advancement && (
          <div className={`${styles.tag} ${styles['tag-advancement']}`}>
            <span>{freight.advancement}</span>
          </div>
        )}
        {freight.isVip && (
          <div className={`${styles.tag} ${styles['tag-vip']}`}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.75423 1H2.9536C2.75782 1 2.56469 1.04561 2.38951 1.13326C2.37218 1.14193 2.35507 1.15099 2.3382 1.16043L3.43486 3.90854H3.81073L5.70792 1.05604C5.72152 1.03559 5.73707 1.01685 5.75423 1ZM3.99273 4.6106C3.99613 4.61065 3.99953 4.61065 4.00293 4.6106H7.99569C7.99908 4.61065 8.00248 4.61065 8.00588 4.6106H8.28371L5.99936 10.3349L3.71502 4.6106H3.99273ZM8.18788 3.90854H8.56387L9.66095 1.15938C9.64468 1.15032 9.6282 1.14161 9.61151 1.13326C9.43633 1.04561 9.2432 1 9.04742 1H6.24438C6.26154 1.01685 6.27709 1.03559 6.29069 1.05604L8.18788 3.90854ZM7.3461 3.90854H4.65251L5.99931 1.88358L7.3461 3.90854ZM1.79884 1.6992L2.6805 3.90854H0.157645C0.184975 3.85961 0.215647 3.81233 0.249547 3.76707L1.79884 1.6992ZM2.96066 4.6106H0C0.0179073 4.87578 0.118923 5.12898 0.289203 5.33381L0.289954 5.33471L5.03062 11.0753L5.03272 11.0778C5.15124 11.2194 5.29928 11.3332 5.46639 11.4113C5.54971 11.4502 5.63678 11.4798 5.72599 11.4997C5.70845 11.4777 5.69332 11.4533 5.68115 11.4267C5.67872 11.4214 5.67642 11.416 5.67426 11.4106L5.67396 11.4098L2.96066 4.6106ZM6.32469 11.41L9.03807 4.6106H12C11.9821 4.87577 11.8811 5.12896 11.7108 5.33379L11.71 5.33471L6.96729 11.0778C6.84877 11.2194 6.70072 11.3332 6.53361 11.4113C6.4498 11.4504 6.36221 11.4801 6.27246 11.5C6.29183 11.4758 6.30828 11.4487 6.32105 11.4188L6.32452 11.4105L6.32469 11.41ZM11.7505 3.76707C11.7843 3.81233 11.815 3.8596 11.8423 3.90854H9.31823L10.2007 1.69729L11.7505 3.76707Z" fill="white"/>
            </svg>
            <span>VIP</span>
          </div>
        )}
        {freight.negotiations > 0 && (
          <div className={`${styles.tag} ${styles['tag-negotiations']}`}>
            <MessageCircle />
            <span>{freight.negotiations}</span>
          </div>
        )}
      </div>
    </div>
  );
}
