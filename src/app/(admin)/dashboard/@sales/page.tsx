import React from 'react';
import {getSummarySales} from '@/lib/api';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableHeader from '@/app/components/summary-table-header';
import SummaryTableCell from '@/app/components/summary-table-cell';
import DashboardCard from '@/app/components/dashboard-card';
import MagicButton from "@/app/components/magic-button";

// Описуємо інтерфейс для даних, які очікуються від API
interface SalesData {
    companyId: number;
    companyTitle: string;
    sold: number;
    income: number;
}

export interface PageProps {
}

export default async function Page({}: PageProps) {
    // Завантажуємо дані та чекаємо їх завершення
    const data: SalesData[] = await new Promise((res) => {
        setTimeout(async () => {
            const salesData = await getSummarySales();
            res(salesData);
        }, 4000); // Затримка у 4 секунди
    });

    // Якщо даних немає, відображаємо відповідне повідомлення
    if (!data || data.length === 0) {
        return <p>No sales data available.</p>;
    }

    return (
        <DashboardCard label={<>Sales details
            <MagicButton/>
        </>}>
            <SummaryTable
                headers={
                    <>
                        <SummaryTableHeader>Company</SummaryTableHeader>
                        <SummaryTableHeader align="center">Sold</SummaryTableHeader>
                        <SummaryTableHeader align="center">Income</SummaryTableHeader>
                    </>
                }
            >
                {data.map(({companyId, companyTitle, sold, income}) => (
                    <tr key={companyId}>
                        <SummaryTableCell>{companyTitle}</SummaryTableCell>
                        <SummaryTableCell align="center">{sold}</SummaryTableCell>
                        <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
                    </tr>
                ))}
            </SummaryTable>
        </DashboardCard>
    );
}