import {Component, OnInit} from '@angular/core';
import {ShopService} from "../../shared/services/shop.service";
import {NotificationsService} from "angular2-notifications";
import {User} from "../../shared/models/user";
import {HomeService} from "../../shared/services/home.service";
declare var jQuery: any;

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss'],
    providers: [ShopService, HomeService]
})
export class ShopComponent implements OnInit {

    user: User;
    inventoryItemsCollection = [];
    ordersCollection = [];

    showLoader: boolean;

    page: number;
    pageSize: number;
    totalPages: number;
    isFirstPage: boolean;
    isLastPage: boolean;

    showForUser: boolean;
    showForAdmin: boolean;

    constructor(private shopService: ShopService, private notificationService: NotificationsService, private homeService: HomeService) {
    }

    ngOnInit() {
        this.loadUser();

    }

    loadUser() {
        this.homeService.home().subscribe(
            user => {
                this.user = new User(user);
                this.initShop();
            }
        )
    }

    getInventoryItems(page, pageSize) {
        this.showLoader = true;
        this.shopService.getInventoryItems(page, pageSize).subscribe(
            response => {
                this.inventoryItemsCollection = response.content;
                this.showLoader = false;
                this.isFirstPage = response.first;
                this.isLastPage = response.last;
                this.totalPages = response.totalPages;
            },
            error => this.inventoryItemsCollection = []
        )
    }

    getOrders(page, pageSize) {
        this.showLoader = true;
        this.shopService.getOrders(page, pageSize).subscribe(
            response => {
                this.ordersCollection = response.content;
                this.showLoader = false;
                this.isFirstPage = response.first;
                this.isLastPage = response.last;
                this.totalPages = response.totalPages;
            },
            error => this.ordersCollection = []
        )
    }

    loadNextPage() {
        if (!this.isLastPage) {
            this.page++;
            if (this.showForUser)
                this.getInventoryItems(this.page, this.pageSize);
            if (this.showForAdmin)
                this.getOrders(this.page, this.pageSize);
        }
    }

    loadPreviousPage() {
        if (!this.isFirstPage) {
            this.page--;
            if (this.showForUser)
                this.getInventoryItems(this.page, this.pageSize);
            if (this.showForAdmin)
                this.getOrders(this.page, this.pageSize);
        }
    }

    changePageSize(size) {
        this.page = 0;
        this.pageSize = size;
        if (this.showForUser)
            this.getInventoryItems(this.page, this.pageSize);
        if (this.showForAdmin)
            this.getOrders(this.page, this.pageSize);
    }

    initShop() {
        this.showLoader = true;
        this.page = 0;
        this.pageSize = 10;
        this.isFirstPage = false;
        this.isLastPage = false;
        this.totalPages = 0;

        if (this.user.role === 'ROLE_USER') {
            this.getInventoryItems(this.page, this.pageSize);
            this.showForAdmin = false;
            this.showForUser = true;
        }

        if (this.user.role === 'ROLE_ADMIN') {
            this.getOrders(this.page, this.pageSize);
            this.showForAdmin = true;
            this.showForUser = false;
        }

    }

    placeOrder(itemId) {
        this.shopService.placeOrder(itemId).subscribe(
            response => {
                this.notificationService.success(
                    'Success',
                    'Order placed. Go retrieve it from Mindaugas Jaunius.',
                    {
                        timeOut: 5000,
                        showProgressBar: true,
                        pauseOnHover: false,
                        clickToClose: true,
                        maxLength: 100
                    }
                );
            },
            error => {
                this.notificationService.error('Error', 'Order was not placed.', true);
            })
    }

    approveOrder(orderId) {
        this.shopService.approveOrder(orderId).subscribe(
            response => {
                this.notificationService.success(
                    'Success',
                    'Order approved.',
                    {
                        timeOut: 2000,
                        showProgressBar: true,
                        pauseOnHover: false,
                        clickToClose: true,
                        maxLength: 100
                    }
                );
                this.getOrders(this.page, this.pageSize);
            },
            error => {
                this.notificationService.error('Error', 'Order was not approved.', true);
            })
    }

}
